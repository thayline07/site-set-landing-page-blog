import { useCallback, useMemo, type ReactElement } from "react";
import {
  ShareConfig,
  SOCIAL_PROVIDERS,
  SocialProvider,
} from "./social-providers";
import { useClipboard } from "../use-clipboard/use-clipboard";
import { Link } from "lucide-react";

type ShareButton = {
  provider: SocialProvider;
  name: string;
  icon: ReactElement;
  action: () => Promise<boolean> | boolean;
};

type UseShareProps = ShareConfig & {
  clipboardTimeout?: number;
};

export const useShare = ({
  url,
  title,
  text,
  clipboardTimeout = 2000,
}: UseShareProps) => {
  const { isCopied, handleCopy } = useClipboard({ timeout: clipboardTimeout });

  const shareConfig = useMemo(
    () => ({
      url,
      ...(title && { title }),
      ...(text && { text }),
    }),
    [url, title, text]
  );

  const share = useCallback(
    async (provider: SocialProvider): Promise<boolean> => {
      try {
        if (provider === "Clipboard") {
          const copied = await handleCopy(url);
          return copied === true;
        }

        const providerConfig = SOCIAL_PROVIDERS[provider];

        if (!providerConfig) {
          throw new Error(`Provider não suportado: ${provider}`);
        }

        const shareUrl = providerConfig.shareUrl(shareConfig);
        const shareWindowOpen = window.open(
          shareUrl,
          "_blank",
          "width=600, height=600, location=yes, status=yes"
        );

        return !!shareWindowOpen;
      } catch {
        return false;
      }
    },
    [shareConfig, handleCopy, url]
  );

  const shareButtons = useMemo<ShareButton[]>(
    () => [
      ...Object.entries(SOCIAL_PROVIDERS).map(([key, provider]) => ({
        provider: key as SocialProvider,
        name: provider.name,
        icon: provider.icon,
        action: () => share(key as SocialProvider),
      })),
      {
        provider: "Clipboard",
        name: isCopied ? "Link Copiado!" : "Copiar Link",
        icon: <Link className="h-4 w-4" />,
        action: () => share("Clipboard"),
      },
    ],
    [share, isCopied]
  );

  return {
    share,
    shareButtons,
  };
};

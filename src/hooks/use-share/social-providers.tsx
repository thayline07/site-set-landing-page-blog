import {
  AtSign,
  FacebookIcon,
  LinkedinIcon,
  Slack,
  TwitterIcon,
} from "lucide-react";

export type ShareConfig = {
  url: string;
  title?: string;
  text?: string;
};

// Align provider type with the actual SOCIAL_PROVIDERS keys and include Clipboard
export type SocialProvider = keyof typeof SOCIAL_PROVIDERS | "Clipboard";

export const SOCIAL_PROVIDERS = {
  linkedin: {
    name: "LinkedIn",
    icon: <LinkedinIcon className="h-4 w-4" />,
    shareUrl: (config: ShareConfig) =>
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        config.url
      )}`,
  },
  facebook: {
    name: "Facebook",
    icon: <FacebookIcon className="h-4 w-4" />,
    shareUrl: (config: ShareConfig) =>
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        config.url
      )}`,
  },
  slack: {
    name: "Slack",
    icon: <Slack className="h-4 w-4" />,
    shareUrl: (config: ShareConfig) =>
      `https://slack.com/share?url=${encodeURIComponent(
        config.url
      )}&text=${encodeURIComponent(config.title || "")}`,
  },
  twitter: {
    name: "Twitter",
    icon: <TwitterIcon className="h-4 w-4" />,
    shareUrl: (config: ShareConfig) =>
      `https://x.com/intent/tweet?url=${encodeURIComponent(
        config.url
      )}&text=${encodeURIComponent(config.title || "")}`,
  },
  linked: {
    name: "Threads",
    icon: <AtSign className="h-4 w-4" />,
    shareUrl: (config: ShareConfig) =>
      `https://www.threads.net/intent/post?text=${encodeURIComponent(
        config.title || ""
      )} ${encodeURIComponent(config.url)}`,
  },
};

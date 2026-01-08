import Image, { ImageProps } from "next/image";
import { cn } from "@/lib/utils";

type AvatarSize = "xs" | "sm";

type AvatarImageProps = Omit<ImageProps, "width" | "height"> & {
  size?: AvatarSize;
};

export const AvatarImage = ({
  src,
  alt,
  size = "sm",
  ...rest
}: AvatarImageProps) => {
  const avatarSize = {
    xs: "h-5 w-5",
    sm: "h-9 w-9",
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-full border-blue-200 border",
        avatarSize[size]
      )}
    >
      <Image src={src} alt={alt} fill {...rest} />;
    </div>
  );
};

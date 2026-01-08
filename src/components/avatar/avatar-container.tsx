type AvatarContainerProps = {
  children: React.ReactNode;
};

export const AvatarContainer = ({ children }: AvatarContainerProps) => {
  return <div className="flex flex-col gap-3">{children}</div>;
};

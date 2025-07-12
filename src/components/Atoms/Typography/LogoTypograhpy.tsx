interface LogoTypography {
  children: React.ReactNode;
}

export const LogoTypography = ({ children }: LogoTypography) => {
  return <p className="text-[#585660] font-medium">{children}</p>;
};

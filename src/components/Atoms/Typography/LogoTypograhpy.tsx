interface LogoTypography {
  children: React.ReactNode;
}

export const LogoTypography = ({ children }: LogoTypography) => {
  return <p className="font-medium text-[#585660]">{children}</p>;
};

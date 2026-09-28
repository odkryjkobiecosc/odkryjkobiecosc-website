"use client";

type EmailButtonProps = {
  className?: string;
  children?: React.ReactNode;
};

export default function EmailButton({
  className,
  children = "Napisz e-mail",
}: EmailButtonProps) {
  const openEmail = () => {
    const local = [
      107, 114, 97, 106, 101, 119, 115, 107, 97, 112, 104, 111, 116, 111,
    ]
      .map((code) => String.fromCharCode(code))
      .join("");

    const domain = [
      103, 109, 97, 105, 108, 46, 99, 111, 109,
    ]
      .map((code) => String.fromCharCode(code))
      .join("");

    window.location.href = `mailto:${local}@${domain}`;
  };

  return (
    <button type="button" className={className} onClick={openEmail}>
      {children}
    </button>
  );
}

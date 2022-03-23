import React from "react";
import Image, { ImageProps } from "next/image";
import { css } from "@emotion/react";

type Props = { size?: number } & Partial<ImageProps>;

const Logo = ({ size = 100, ...props }: Props) => {
  return (
    <div style={{ borderRadius: 8 }}>
      <Image
        {...props}
        css={css`
          border-radius: 8px;
        `}
        src="/images/logo.png"
        width={size}
        height={size}
      />
    </div>
  );
};

export default Logo;

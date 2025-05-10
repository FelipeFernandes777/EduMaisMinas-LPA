import { BannerContainer } from "./banner_container";

export function Banner() {
  return (
    <BannerContainer>
      <picture>
      <source media="(min-width: 1920px)" srcSet="/banner/banner_1920x600.png" />
        <source media="(min-width: 1440px)" srcSet="/banner/banner1440x600.png" />
        <source media="(min-width: 1024px)" srcSet="/banner/banner_1024x600.png" />
        <source media="(min-width: 768px)" srcSet="/banner/banner_mobile.png" />
        <img
          src="/banner/banner_mobile.png"
          alt="Banner"
          className="w-full h-full object-cover"
        />
      </picture>
    </BannerContainer>
  );
}

import { joinCta, mainNav } from "@/config/site";
import { ButtonLink, Container, Logo } from "@/components/ui";
import { DesktopNav } from "./desktop-nav";
import { LanguageSwitch } from "./language-switch";
import { MobileNav } from "./mobile-nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line-subtle bg-surface lg:border-b-thin lg:border-line">
      {/* Mobile frame: the logo sits 16px from the edge (Figma's fixed 187px gap overrides its 24px padding), the menu 32px. */}
      <Container className="flex h-header-mobile items-center justify-between gap-6 pe-8 ps-4 sm:px-6 lg:h-header lg:px-8 xl:justify-center xl:gap-[267px] xl:px-0">
        <Logo />
        <DesktopNav links={mainNav} />
        <div className="hidden items-center gap-[13px] lg:flex">
          <LanguageSwitch />
          <ButtonLink href={joinCta.href} variant="primary" size="sm">
            {joinCta.label}
          </ButtonLink>
        </div>
        <MobileNav links={mainNav} cta={joinCta} />
      </Container>
    </header>
  );
}

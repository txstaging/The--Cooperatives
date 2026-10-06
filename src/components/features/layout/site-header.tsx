import { joinCta, mainNav } from "@/config/site";
import { ButtonLink, Container, Logo } from "@/components/ui";
import { DesktopNav } from "./desktop-nav";
import { LanguageSwitch } from "./language-switch";
import { MobileNav } from "./mobile-nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line-subtle bg-surface lg:border-b-thin lg:border-line">
      <Container className="flex h-header-mobile items-center justify-between gap-6 lg:h-header xl:justify-center xl:gap-[267px]">
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

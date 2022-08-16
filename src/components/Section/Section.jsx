import { TitleText, SectionText } from './Section.styled';

export function Section({title, children}) {
    return (
        <SectionText>
            {title && <TitleText>{title}</TitleText>}
            {children}
        </SectionText>
    )
}
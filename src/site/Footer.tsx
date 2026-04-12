export type FooterType = {
    titleForFooter: string
}
export const Footer = ({titleForFooter}: FooterType) => {
    return (
        <div>
            {titleForFooter}
        </div>
    );
};


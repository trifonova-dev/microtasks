export type HeaderType = {
    title: string
}
export const Header = ({title}: HeaderType) => {
    return (
        <div>
            {title}
        </div>
    );
};


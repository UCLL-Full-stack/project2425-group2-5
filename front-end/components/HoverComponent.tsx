const HoverComponent: React.FC = () => {
    return (
        <div onMouseOver={() => console.log('Hovered!')}>
            Hover over this text.
        </div>
    );
};
export default HoverComponent;
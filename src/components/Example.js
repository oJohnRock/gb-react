const Example = (props) => {
    return (
        <span>
            {props.message}, {props.name}
        </span>
    );
};

const withLoggerHOC = function (Component) {
    return (props) => {
        console.log(props);

        const extProps = { ...props, name: "Diablo" };

        return <Component {...extProps} />;
    };
};

export default withLoggerHOC(Example);

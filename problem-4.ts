type Circle = {
    shape: "circle";
    radius: number;
};

type Rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
};

type Shape = Circle | Rectangle;

const calculateShapeArea = (shape: Shape): number => {
    if (shape.shape === "circle") {
        return Math.PI * shape.radius ** 2;
    } else {
        return shape.width * shape.height;
    }
};

const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
console.log(circleArea);
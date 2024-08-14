export class Vector2 {
    /** The X value of the vector. */
    x: number;
    /** The Y value of the vector. */
    y: number;

    /**
     * Creates a new Vector2 with the given values.
     * @param x The X value of the vector.
     * @param y The Y value of the vector.
     */
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    };

    /**  The length of the Vector2. */
    get magnitude(): number {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    };

    /** A copy of the Vector2 with a magnitude of 1 */
    get normal(): Vector2 {
        return new Vector2(this.x / this.magnitude, this.y / this.magnitude)
    };
}
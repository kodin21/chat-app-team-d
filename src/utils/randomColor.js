/**
 * Generates random color hex data
 * @returns Random color hex code
 */
export default function randomColor() {
  return Math.floor(Math.random() * 16777215).toString(16);
}

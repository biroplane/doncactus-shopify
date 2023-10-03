import { ref } from "vue";
const ctx = ref();
const count = ref(Math.PI);
const c = ref(0);
const circ = ref((4 * (Math.sqrt(2) - 1)) / 3);
const width = ref(0);
const height = ref(0);

export const createCircle = (canvas: HTMLCanvasElement, d: number) => {
  ctx.value = canvas.getContext("2d");
  width.value = canvas.width;
  height.value = canvas.height;
  count.value = d;
  c.value = 0;
  render();
};

const drawBezierCircle = (cx: number, cy: number, r: number) => {
  let c;
  const offsetX = 200 * Math.sin(count.value);
  const offsetY = 200 * Math.cos(count.value * 2);
  r = r / 2;

  count.value += 0.003;
  const wide = 0.2;

  ctx.value.translate(cx, cy); // translate to centerpoint

  ctx.value.beginPath();

  // top right
  c = circ.value + wide * Math.sin(count.value);
  ctx.value.moveTo(offsetX + 0, offsetY + -r);
  ctx.value.bezierCurveTo(
    offsetX + c * r,
    offsetY + -r,
    offsetX + r,
    offsetY + -c * r,
    offsetX + r,
    offsetY + 0
  );

  // bottom right
  c = circ.value + wide * Math.cos(count.value);
  ctx.value.bezierCurveTo(
    offsetX + r,
    offsetY + c * r,
    offsetX + c * r,
    offsetY + r,
    offsetX + 0,
    offsetY + r
  );

  // bottom left
  c = circ.value + wide * Math.sin(count.value * 2);
  ctx.value.bezierCurveTo(
    offsetX + -c * r,
    offsetY + r,
    offsetX + -r,
    offsetY + c * r,
    offsetX + -r,
    offsetY + 0
  );

  // top left
  c = circ.value + wide * Math.cos(count.value + 1);
  ctx.value.bezierCurveTo(
    offsetX + -r,
    offsetY + -c * r,
    offsetX + -c * r,
    offsetY + -r,
    offsetX + 0,
    offsetY + -r
  );
  ctx.value.fillStyle = "#C4C49C";
  ctx.value.filter = "blur(20px)";
  ctx.value.fill();
};

const render = () => {
  requestAnimationFrame(render as FrameRequestCallback);

  ctx.value.setTransform(1, 0, 0, 1, 0, 0);
  ctx.value.clearRect(0, 0, width.value, height.value);

  drawBezierCircle(width.value / 2, height.value / 2, 300);
};

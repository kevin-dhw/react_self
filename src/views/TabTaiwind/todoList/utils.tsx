// 生成随意状态

export const getRandomStatus = () => {
  const num = Math.random();
  if (num > 0.5) {
    return "todo";
  } else {
    return "done";
  }
};

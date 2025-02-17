const documentBody = document.body;

// 生成一定数量（这里设置为200朵）的樱花元素并添加到页面，使其更密集充满界面
for (let i = 0; i < 20; i++) {
    const sakura = document.createElement('sakura');
    sakura.className = 'sakura';
    // 随机设置樱花的初始位置（覆盖整个页面范围）
    sakura.style.left = `${Math.random() * window.innerWidth}px`;
    sakura.style.top = `${Math.random() * window.innerHeight}px`;
    // 随机设置樱花的水平和垂直方向速度分量，范围在 -1 到 1 之间（控制飘落轨迹随机性）
    const horizontalSpeed = (Math.random() * 4 - 1) / 2;
    const verticalSpeed = Math.random() * 4;
    // 为樱花元素添加自定义属性来存储速度信息
    sakura.dataset.horizontalSpeed = horizontalSpeed;
    sakura.dataset.verticalSpeed = verticalSpeed;
    // 随机设置樱花的旋转角度，让效果更自然（取值范围0到360度）
    sakura.style.transform = `rotate(${Math.random() * 360}deg)`;
    documentBody.appendChild(sakura);
}
// 监听页面的点击事件
documentBody.addEventListener('click', function () {
    const bloomFlower = document.createElement('bloom-flower');
    bloomFlower.className = 'bloom-flower';
    // 随机设置花朵出现的位置（在页面范围内）
    bloomFlower.style.left = `${Math.random() * window.innerWidth}px`;
    bloomFlower.style.top = `${Math.random() * window.innerHeight}px`;
    bloomFlower.style.display = 'visible';
    documentBody.appendChild(bloomFlower);
});

// 每隔一定时间更新樱花的位置，实现随机飘落轨迹，并让樱花循环出现
setInterval(() => {
    const sakuras = document.querySelectorAll('.sakura');
    sakuras.forEach((sakura) => {
        const horizontalSpeed = parseFloat(sakura.dataset.horizontalSpeed);
        const verticalSpeed = parseFloat(sakura.dataset.verticalSpeed);
        const currentLeft = parseFloat(sakura.style.left.replace('px', ''));
        const currentTop = parseFloat(sakura.style.top.replace('px', ''));
        const newLeft = currentLeft + horizontalSpeed;
        const newTop = currentTop + verticalSpeed;

        // 判断樱花是否超出页面底部，如果超出则重新回到页面上方的随机位置
        if (newTop > window.innerHeight) {
            sakura.style.top = `${Math.random() * -window.innerHeight}px`;
            sakura.style.left = `${Math.random() * window.innerWidth}px`;
        } else {
            sakura.style.left = `${newLeft}px`;
            sakura.style.top = `${newTop}px`;
        }
    });
}, 30);

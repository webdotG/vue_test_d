<template>
    <section class="funnelPart">
        <ul class="funnelPart-list">
            <li class="funnelPart-item">
                <h3 class="funnelPart-heading">
                    1
                </h3>
                <p class="funnelPart-paragraph">
                    Choose a Diamond
                </p>
            </li>
            <li class="funnelPart-item">
                <h3 class="funnelPart-heading">
                    2
                </h3>
                <p class="funnelPart-paragraph">
                    Choose a Setting
                </p>
            </li>
            <li class="funnelPart-item">
                <h3 class="funnelPart-heading">
                    3
                </h3>
                <p class="funnelPart-paragraph">
                    Complete Ring
                </p>
            </li>
        </ul>
    </section>
</template>

<style>
.funnelPart{
padding-top:  10px;
padding-bottom: 20px;
max-width: 1920px;
}
.funnelPart-list{
width: 100%;
height: 80px;
display: flex;
box-sizing: border-box;
border: 1px solid var(--color-primary);
border-radius: 40px;
box-sizing: border-box;
}
.funnelPart-item{
margin-left: 20px;
display: flex;
align-items: center;
flex: 1 1;
margin-left: 34px;
width: 100%;
position: relative;
}
.funnelPart-item:nth-child(1)::after,
.funnelPart-item:nth-child(2)::after{
content: "";
height: 80px;
width: 1px;
background-color: var(--color-primary);
display: block;
position: absolute;
right: 0;
}

.funnelPart-heading{
font-size: 32px;
font-weight: 500;
line-height: 41px;
color: var(--color-primary);
}
.funnelPart-paragraph{
font-size: 16px;
font-weight: 600;
line-height: 20px;
margin-left: 12px;
margin-right: auto;
color: var(--color-primary);
}
</style>
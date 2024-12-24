import React from 'react';
import Card from './ui/card';
import Card2 from './ui/card2';


const CardSample = () => {
    return (
        <div className="w-full min-h-screen flex flex-col gap-y-9 items-center justify-center bg-slate-900 p-4 pb-12">

            <Card
                topRightGradient="https://www.luxalgo.com/images/graphics/top_right_orange_pink_stroke.png"
                bottomLeftGradient="https://www.luxalgo.com/images/graphics/bottom_left_purple_orange_fade.png"
                header1="State of the art trading indicators"
                topic="Pro Toolkits"
                description="Trade automated price action, advanced signals, and spot reversals with money flow. Our world renowned toolkits replace indicators with simple workflows for your charts."
                buttonLabel="Level Up Your Charts"
                imgSrc="https://www.luxalgo.com/images/product/showcases/showcase_1.png"
            />

            <Card2
                topLeftGradient="https://www.luxalgo.com/images/graphics/top_left_blue_stroke.png"
                bottomRightGradient="https://www.luxalgo.com/images/graphics/bottom_right_blue_stroke.png"
                header1="Easily find high probability setups"
                topic="Screeners & Alerts"
                description="Get professional-grade screeners that work seamlessly alongside our toolkits. Filter out the noise and find trades across all of your favorite assets."
                buttonLabel="Unlock Access"
                imgSrc="https://www.luxalgo.com/images/product/showcases/showcase_1.png"
            />

        </div>
    )
}

export default CardSample
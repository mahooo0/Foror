import { useState } from 'react';

export default function ToolCard() {
    const [isHover, setIsHover] = useState(false);
    return (
        <article
            className={`w-full ${
                isHover ? 'h-[200px]' : 'h-[160px]'
            } flex flex-col gap-4 bg-[#1F1F1F] relative overflow-hidden rounded-[8px] duration-700`}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            <div className="flex gap-[36px] flex-col text-white p-4 z-10 h-fit  duration-700 ">
                <img
                    className="w-12 h-12"
                    src="https://s3-alpha-sig.figma.com/img/685e/839c/aa494e8ad47cc30b9b11a2b3a2cb6aab?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=bEY7tw0QYNZLmzY4~-oQXm1bBkKdd-qwmsLCaEntzYIt2E2Wcn16R65EWwejcYzB9fXYvL5wFrfRDNy7pYdKYMto5Yl-YZrVNfkggHJn2A0LTQO55zM2ThgzdvN5TSMIfmHcr3jQAvV~nmWM1sw7ceCCGY-1TkAe-FaEnhSr9Szwis71ArhX1SLvabvVoV7YoViITpcWp68J~OjnohRtBnnPkcDFBw2rkgTxQ4CZQ8SulMW0cwdCBuNT9m5cdjox3xJpQCj1tXD-ZgVR7MQXdlYkB21VIazqrqJwhzFqcwsJu9r-pZs9Qy2bPyEkNb2yX~0tXxZ4ZZNZcKTkJOvO5g__"
                    alt=""
                />
                <div className="h-fit duration-700 text-start">
                    <h5 className="text-[24px]">Brain</h5>
                    <p
                        className={`text-[16px]  ${
                            isHover
                                ? 'opacity-100'
                                : 'opacity-0  -translate-y-2.5'
                        } duration-700`}
                    >
                        For Researching& Generating Big Idea
                    </p>
                </div>
            </div>
            <img
                className={`absolute bottom-[0px] left-[0px] z-0 blur-2xl w-[140%] ${
                    isHover ? 'opacity-100' : 'opacity-0'
                } duration-700`}
                src="https://s3-alpha-sig.figma.com/img/9e04/bf07/573da093024b2cc0350128702f4c2d48?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=EMBsE1~lWrxfSynHmzuFnXm3VmBDWLuwZNin8Reru3vIiHYWY3gX8TY86LB~vNNyDo1mtlx5NSq8sNyL7h-QaHbuxR51DZX5Ys9zmBFeJj5X5c2oil5IVNiahPn8m5vJhF-7F81Iw1XmWjAdpDRKJ4ZFw5feJIgmdm-MnYAPpeHzqq3WSzQQXw59Lpo0B~0hSX87U2BnTQHgJ8vsCy1olbA2TYCOOjdxuvKBs888FvAHL1US~RDnIaHXnTpqRslH9rb6RH0pJN3wofIX68gwfP9nGUlvOX7rO6fL7-iDfXKeRakIamEGPucdAYcIqfyD6zdplY7o-Jf0JPr3sWGLrA__"
                alt=""
            />
        </article>
    );
}

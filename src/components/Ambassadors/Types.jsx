import React from "react";
import event from '../../assests/Images/Ambassadors/event.png';
import content from '../../assests/Images/Ambassadors/content.png';
import text from '../../assests/Images/Ambassadors/text.png';
import community from '../../assests/Images/Ambassadors/community.png';
import educator from '../../assests/Images/Ambassadors/educators.png';

import Image from "next/image";

const roleData = [
    {
        imgSrc: event,
        roleName: "Event Enabler",
        roleDescription: "Participate in community activities in person or online, host local events, and go to regional ones."
    },
    {
        imgSrc: content,
        roleName: "Content creator",
        roleDescription: "Create content about web3 and The Graph, including articles, videos, infographics, memes or GIFs."
    },
    {
        imgSrc: text,
        roleName: "Text Translator",
        roleDescription: "Translate The Graph and other community documentation, material, and social posts into other languages"
    },
    {
        imgSrc: community,
        roleName: "Community care",
        roleDescription: "Post answers to questions or share educational resources in The Graph Forum, Telegram, Discord, or Reddit."
    },
    {
        imgSrc: educator,
        roleName: "Educator",
        roleDescription: "Teach others how to actively participate and contribute in web3 and The Graph ecosystem."
    },
];

const Types = () => {
    return (
        <div className="w-full">
            <div className="pt-20 items-center justify-center">
                <div className="max-w-[1240px] mx-auto p-4">
                    <div className="md:px-20">
                        <div>
                            <h1 className="font-bold font-weight-600 text-4xl leading-[64px] text-[#011829]">Ambassador <span className="text-[#3898ec]">Roles</span> </h1>
                            <p className="py-5 text-left text-[#011829] font-base font-weight-600 md:text-2xl text-xl leading-6 md:leading-8">The Joocbox Advocates Program empowers members of Joocbox ecosystem to drive community development and growth by sharing contributions through different role types:</p>
                        </div>
                        <div className="my-10 grid lg:grid-cols-3 grid-cols-2 ">
                            {roleData.map((role, index) => (
                                <div className="py-4 md:w-[290px] mx-auto h-auto" key={index}>
                                    <div>
                                        <Image
                                            src={role.imgSrc}
                                            height={40}
                                            width={60}
                                            className=""
                                            alt="/"
                                        />
                                    </div>
                                    <div className="">
                                        <div className="my-5">
                                            <h1 className="text-[22px] leading-[28px] text-[#0f0f0f]">{role.roleName}</h1>
                                            <p className="text-[15px] leading-[21px] pr-2 text-[#011829] my-2">{role.roleDescription}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Types;

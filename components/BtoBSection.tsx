import React from 'react'
import Card from './ui/card';
import { cardsData } from '@/constants';
import TextAnimation from './ui/text-generate-effect';

const BtoBSection = () => {

      return (
        <section
          className="section-padding py-14  px-5 sm:px-5 md:px-10 lg:px-14 xl:px-28"
          style={{
            background: "linear-gradient(0deg, rgb(12, 38, 69) 20%, rgb(3, 5, 22) 70%)",
          }}
        >
          <div className="text-center mb-10">
            <h2 className="font-sans text-[2.6rem] leading-[3rem] text-textColorFooter">
                <TextAnimation text='Your best call for B2B/B2C product innovation'/>            
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-8">
            {cardsData.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </section>
      );
    };
    
export default BtoBSection
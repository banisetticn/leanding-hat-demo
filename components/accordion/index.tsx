'use client';
import { Ifaq } from '@lendingHat/interfaces';
import React, { useState } from 'react';

export interface IAccordion {
  data: Ifaq[];
}

const Accordion = (props: IAccordion) => {
  const { data } = props;

  const [clicked, setClicked] = useState('0');

  const handleOnClick = (event: React.MouseEvent, index: number) => {
    event.preventDefault();
    setClicked(`${index}`);
  };
  return (
    <>
      {data &&
        data.map((item: Ifaq, index: number) => {
          {
            return (
              <>
                <button
                  key={`${index}-item-accordion`}
                  type='button'
                  className='accordion'
                  onClick={(e) => handleOnClick(e, index)}
                >
                  {item.question}
                  <svg
                    width='38'
                    height='38'
                    viewBox='0 0 38 38'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <circle cx='19' cy='19' r='18.5' stroke='#D2D2D2' />
                    <path
                      d='M26.7071 19.7071C27.0976 19.3166 27.0976 18.6834 26.7071 18.2929L20.3431 11.9289C19.9526 11.5384 19.3195 11.5384 18.9289 11.9289C18.5384 12.3195 18.5384 12.9526 18.9289 13.3431L24.5858 19L18.9289 24.6569C18.5384 25.0474 18.5384 25.6805 18.9289 26.0711C19.3195 26.4616 19.9526 26.4616 20.3431 26.0711L26.7071 19.7071ZM11 20L26 20L26 18L11 18L11 20Z'
                      fill='#D2D2D2'
                    />
                  </svg>
                </button>
                {clicked === `${index}` && (
                  <div className='panel'>
                    <p>{item.answer}</p>
                  </div>
                )}
              </>
            );
          }
        })}
    </>
  );
};

export default Accordion;

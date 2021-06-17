import { useState, useEffect } from 'react';
import { Container, Title  } from './style';
import { InnerButton } from '../InnerButton';

import menuImg from '../../assets/menu.svg';
import listImg from '../../assets/list.svg';
import plusImg from '../../assets/plus.svg';
import closeImg from '../../assets/close.svg';
import calendarImg from '../../assets/calendar.svg';

interface IFloatButton {
  buttonAnimate: string;
  animateSummary(): void;
  animateTransitions(): void;
}

export const FloatButton: React.FC<IFloatButton> = ({ buttonAnimate, animateSummary, animateTransitions }) => {
  const [init, setInit] = useState(true);
  const [option, setOption] = useState('');
  const [animate, setAnimate] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  
  const [hideAdd, setHideAdd] = useState(true);
  const [hideList, setHideList] = useState(true);
  const [hideMenu, setHideMenu] = useState(false);
  const [hideChange, setHideChange] = useState(true);
  
  useEffect(() => {
    if (buttonAnimate === 'add') {      
      setIsSelected(true);
    } else if(buttonAnimate === 'menu') {
      setHideAdd(true);
      setHideList(true);
      setHideChange(true);

      setHideMenu(false);
      setIsSelected(false);
    } else if(buttonAnimate === 'change') {
      setHideAdd(true);
      setHideList(true);
      setHideMenu(true);
      
      setHideChange(false);
      setIsSelected(true);
    } else if(buttonAnimate === 'transitions') {
      setHideAdd(true);      
      setHideMenu(true);
      setHideChange(true);

      setHideList(false);
      setIsSelected(true);
    }
  }, [buttonAnimate]);

  function AnimateContainer(option: string) {
    if(init) {
      setInit(false);
    }
    
    if(option === 'menu') setIsSelected(false);
    else setIsSelected(!isSelected);

    switch(option) {
      case 'add': {
        setHideMenu(!hideMenu);
        setHideList(!hideList);        
        setHideChange(!hideChange);
        setOption('New Transaction');
        break;
      }
      
      case 'menu': {
        animateSummary();
        setOption('Menu');        
        setHideAdd(!hideAdd);
        setHideList(!hideList);
        setHideChange(!hideChange);
        break;
      }

      case 'list': {
        animateTransitions();
        setHideAdd(!hideAdd);
        setHideMenu(!hideMenu);        
        setHideChange(!hideChange);
        setOption('List Transactions');
        break;
      }

      case 'change': {
        setHideAdd(!hideAdd);
        setHideMenu(!hideMenu);
        setHideList(!hideList);
        setOption('Change Date');        
        break;
      }
    }

    setAnimate(!animate);
  }

  return (
    <>
      <Container
        init={init}
        animate={animate}
        className="glass"
      >
        <InnerButton
          name="Menu"
          option='menu'
          hidden={hideMenu}
          setAnimation={AnimateContainer}
          icon={animate ? closeImg : menuImg}
        />
        <InnerButton        
          option='change'
          name="Change Date"
          icon={calendarImg}
          hidden={hideChange}
          setAnimation={AnimateContainer}
        />
        <InnerButton
          option='list'
          icon={listImg}
          hidden={hideList}
          name="List Transactions"
          setAnimation={AnimateContainer}
        />
        <InnerButton
          option='add'
          icon={plusImg}
          hidden={hideAdd}
          name="New Transaction"
          setAnimation={AnimateContainer}
        />
      </Container>
      <Title isSelected={isSelected}>{option}</Title>
    </>
  );
}
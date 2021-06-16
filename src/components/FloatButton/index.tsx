import { useState } from 'react';
import { Container, Title  } from './style';
import { InnerButton } from '../InnerButton';

import menuImg from '../../assets/menu.svg';
import listImg from '../../assets/list.svg';
import plusImg from '../../assets/plus.svg';
import closeImg from '../../assets/close.svg';
import calendarImg from '../../assets/calendar.svg';

export function FloatButton() {
  const [init, setInit] = useState(true);
  const [option, setOption] = useState('');
  const [animate, setAnimate] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  
  const [hideAdd, setHideAdd] = useState(true);
  const [hideList, setHideList] = useState(true);
  const [hideMenu, setHideMenu] = useState(false);
  const [hideChange, setHideChange] = useState(true);
  
  function AnimateContainer(option: string) {
    if(init) {
      setInit(false);
    }

    switch(option) {
      case 'add': {
        setHideMenu(!hideMenu);
        setHideList(!hideList);
        setIsSelected(!isSelected);
        setHideChange(!hideChange);
        setOption('New Transaction');
        break;
      }
      
      case 'menu': {
        setOption('Menu');
        setIsSelected(false);
        setHideAdd(!hideAdd);
        setHideList(!hideList);
        setHideChange(!hideChange);
        break;
      }

      case 'list': {
        setHideAdd(!hideAdd);
        setHideMenu(!hideMenu);
        setIsSelected(!isSelected);
        setHideChange(!hideChange);
        setOption('List Transactions');
        break;
      }

      case 'change': {        
        setHideAdd(!hideAdd);
        setHideMenu(!hideMenu);
        setHideList(!hideList);
        setOption('Change Date');
        setIsSelected(!isSelected);
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
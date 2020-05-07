import React from 'react'

const BurgerMenu = (props) => {

  const toggleActiveBurger = () => {
    props.setActiveBurger(!props.activeBurger);
  }

  let burgerClass = "burgerMenu";

  if (props.activeBurger) {
    burgerClass += " burgerMenu--active";
  }

  let divsClass = "";
  if (props.divsClass)
    divsClass = props.divsClass
  return (
    <div onClick={toggleActiveBurger} className={props.className + " " + burgerClass}>
      <div className={divsClass}></div>
      <div className={divsClass}></div>
      <div className={divsClass}></div>
    </div>
  )
}

export default BurgerMenu

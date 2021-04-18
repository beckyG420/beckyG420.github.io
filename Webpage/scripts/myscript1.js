#myDIV {
  margin: 25px;
  width: 550px;
  height: 100px;
  background: transparent;
  position: relative;
  font-size: 25px;
  font-family: Lucida Handwriting;
  -webkit-animation-name: mymove;  /* Chrome, Safari, Opera */
  -webkit-animation-duration: 5s;  /* Chrome, Safari, Opera */
  animation-name: mymove;
  animation-duration: 5s;
}

/* Chrome, Safari, Opera */
@-webkit-keyframes mymove {
  from {top: 0px;}
  to {top: 200px;}
}

@keyframes mymove {
  from {top: 0px;}
  to {top: 200px;}
}
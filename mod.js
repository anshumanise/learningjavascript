// Create eventListener to all the button

const w = document.querySelector(".w");
const a = document.querySelector(".a");
const s = document.querySelector(".s");
const d = document.querySelector(".d");
const j = document.querySelector(".j");
const k = document.querySelector(".k");
const l = document.querySelector(".l");
// All button should be able to play a different sound.

w.addeventListerner('click', () = > Audio("https://files.codingninjas.in/tom-1-28537.mp3").play());
a.addeventListerner('click', () = >  Audio("https://files.codingninjas.in/tom-2-28541.mp3").play());
s.addeventListerner('click', () = > Audio("https://files.codingninjas.in/tom-3-28542.mp3").play());
d.addeventListerner('click', () = >  Audio("https://files.codingninjas.in/tom-4-28543.mp3").play());
j.addeventListerner('click', () = >  Audio("https://files.codingninjas.in/snare-28545.mp3").play());
k.addeventListerner('click', () = >  Audio("https://files.codingninjas.in/crash-28546.mp3").play());
l.addeventListerner('click', () = > Audio("https://files.codingninjas.in/kick-bass-28547.mp3").play());
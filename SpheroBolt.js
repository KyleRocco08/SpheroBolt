//Programmer: Kyle Rocco
//Date:/*
Programming Team: Ranen Allishaw & Kyle Rocco
Date: FEB.15.2023
Project: Labyrinth Competition
Version: 7.2
Bolt: 183F
*/


/**
 * CheckpointBLUE will have START scroll across the LED
 * Then it will roll at 0 degrees at 30 speed for 2 seconds
 * Rotate 90 CW
 * Finally it will have the LED turn BLUE
*/
async function CheckpointBLUE() {
  await scrollMatrixText('START', { r: 255, g: 255, b: 255 }, 30, true);
  await roll(0, 78, 2);
  await spin(90, 2.5);
  setMainLed({ r: 0, g: 0, b: 255 })
}


/**
 *
*/
async function CheckpointNoise_1(){
  await roll(90, 68, 1.5);
  await delay(2);
  await roll(180, 66.25, 1);
  await spin(42.5, 2.5);
  await Sound.Animal.play();


/**
 *
*/
async function CheckpointRED() {
    await roll(217.5, 56.1, 1.5);
    await delay(2);
    await roll(132.5, 40.75, 1.1);
    setMainLed({ r: 255, g: 0, b: 0})
    await delay(2);


/**
 *
*/
async function CheckpointNoise_2() {
    await roll(42.5, 55.75, 1.5);
    await delay(1.5);
    await roll(130, 35.75, 1.75);
    await Sound.Animal.play();
}


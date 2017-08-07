/**
 * @flow
 */
import {getDeviceSize} from '../';

// test iphone
test('get device size in iphone 4', () => {
  expect(getDeviceSize(480, 320, 'ios')).toBe('xsmall');
});

test('get device size in iphone 5', () => {
  expect(getDeviceSize(568, 320, 'ios')).toBe('small');
});

test('get device size in iphone 6', () => {
  expect(getDeviceSize(667, 375, 'ios')).toBe('normal');
});

test('get device size in iphone 6 plus', () => {
  expect(getDeviceSize(736, 414, 'ios')).toBe('large');
});

test('get device size larger than iphone 6 plus', () => {
  expect(getDeviceSize(800, 414, 'ios')).toBe('xlarge');
});

// test android
test('get device size in android xsmall', () => {
  expect(getDeviceSize(200, 100, 'android')).toBe('xsmall');
});

test('get device size in android small', () => {
  expect(getDeviceSize(426, 320, 'android')).toBe('small');
});

test('get device size in android normal', () => {
  expect(getDeviceSize(470, 320, 'android')).toBe('normal');
});

test('get device size in android large', () => {
  expect(getDeviceSize(640, 480, 'android')).toBe('large');
});

test('get device size larger than android larget', () => {
  expect(getDeviceSize(960, 720, 'android')).toBe('xlarge');
  expect(getDeviceSize(1000, 720, 'android')).toBe('xlarge');
});

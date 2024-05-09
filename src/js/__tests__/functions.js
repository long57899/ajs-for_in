import sortObject from '../functions';

test('check custom sorting property in object', () => {
  const data = sortObject({
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  }, ['name', 'level']);
  expect(data).toEqual([
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ]);
});

test('check default sorting property in object', () => {
  const data = sortObject({
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  });
  expect(data).toEqual([
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
    { key: 'level', value: 2 },
    { key: 'name', value: 'мечник' },
  ]);
});

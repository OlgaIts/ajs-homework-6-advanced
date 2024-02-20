import orderByProps from '../forin';

describe('testing orderByProps', () => {
  const obj = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };

  test('Проверка массива с отсортированными свойствами', () => {
    const result = orderByProps(obj, ['name', 'level']);
    expect(result).toEqual([
      { key: 'name', value: 'мечник' },
      { key: 'level', value: 2 },
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 },
    ]);
  });

  test('Проверка сортировки с пустым массивом свойств', () => {
    const result = orderByProps(obj, []);
    expect(result).toEqual([
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 },
      { key: 'level', value: 2 },
      { key: 'name', value: 'мечник' },
    ]);
  });
});

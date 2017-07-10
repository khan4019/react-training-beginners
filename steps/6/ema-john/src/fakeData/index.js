import androids from './android';
import cameras from './camera';
import laptops from './laptop';

const fakeData = [...androids, ...cameras, ...laptops];

const updated = laptops.map(item => {
    const rate = (item.star) ? parseFloat(item.star[0]) : 0;
    item.star = rate;
    
    return item;
})
console.log(JSON.stringify(updated));

const shuffle = a => {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

shuffle(fakeData);

export default fakeData;
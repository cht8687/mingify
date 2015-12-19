import chalk from 'chalk';

export default function mingify(s, target = 'html') {
  if (target === 'html') {
    s = `<span style="color: red;">${s}</span>`;
  } else if (target === 'cli') {
    s = chalk.red(s);
  }

  return `老实说我从来没用过${s}，正因为我反感${s}。 为什么我反感，因为我完全有开发${s}的能力，${s}的底层我都了如指掌。
		虽说我反感${s}，但是${s}却占有大量的用户份额，之后我有个想法，不如重新开发一个属于自己思想，自己架构的${s}。
		我给了他一个霸气的名字：MingGe${s}，
		它的名字叫MingGe${s}，MingGe就是我的大名， 一看到${s}名字，就知道作者是我，知道它是国产的，让别人知道国产${s}一样做得很出色，出众！
		我是mingge 请支持国产mingge${s}，因为我们都是中国人。`;
}

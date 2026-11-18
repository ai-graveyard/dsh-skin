import { english } from "@/lib/translations";
import type { Skin } from "@/lib/skins";

const descriptions: Record<string, { style: string; description: string }> = {
  "alpine-light": {
    style: "系统极简",
    description: "干净的瓷白底色，柔和圆角，让注意力回到内容。",
  },
  "braun-control": {
    style: "工业设计",
    description: "克制的灰白、精确的线条，一抹橙色点亮工作区。",
  },
  "night-signal": {
    style: "终端风格",
    description: "深黑工作区搭配薄荷绿，给夜间灵感一个安静的空间。",
  },
  "frosted-tide": {
    style: "磨砂玻璃",
    description: "靛蓝层次、通透面板与青绿色焦点，沉浸又轻盈。",
  },
  "material-orchid": {
    style: "柔和圆角",
    description: "淡淡兰紫与饱满圆角，让每一次交互都柔和一点。",
  },
  "swiss-grid": {
    style: "瑞士网格",
    description: "黑白秩序与醒目的红色，清楚呈现每一层信息。",
  },
  "nordic-linen": {
    style: "北欧自然",
    description: "亚麻色与鼠尾草绿，像在阳光下打开一本笔记。",
  },
  "washi-ink": {
    style: "日式留白",
    description: "和纸底色、墨绿文字与朱红细节，留出思考的余地。",
  },
  "editorial-paper": {
    style: "报刊排版",
    description: "暖纸色与衬线标题，把日常工作变成一页好读的文章。",
  },
  "studio-block": {
    style: "趣味积木",
    description: "明快色块、粗线条与利落阴影，让工作区多一点玩心。",
  },
};

export function skinDisplay(skin: Skin, locale: "zh" | "en" = "zh") {
  if (locale === "en")
    return {
      style: english[descriptions[skin.slug]?.style] ?? skin.style[0],
      description: skin.description,
    };
  return (
    descriptions[skin.slug] ?? {
      style: skin.style[0],
      description: skin.description,
    }
  );
}
export function isDarkSkin(skin: Skin) {
  return skin.style.includes("Dark");
}

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
  "whale-courier": {
    style: "海洋插画",
    description: "海雾蓝侧栏、信使头像与鲸尾火漆，从新会话一直陪到输入框。",
  },
  "liquid-glass": {
    style: "液态玻璃",
    description: "通透镜面高光、清透冷白面板与利落苹果蓝操作，呈现液态玻璃层次。",
  },
  "sunset-boulevard": {
    style: "复古海岸",
    description: "迈阿密落日珊瑚粉、暮色紫与青蓝海风反光，敞篷跑车插画点亮你的新会话。",
  },
  "night-circuit": {
    style: "赛博骇客",
    description: "深邃黑青极客终端网格，搭配阿丽塔风格仿生机甲黑客立绘与等离子代码刃。",
  },
  "taiji-ink": {
    style: "太极水墨",
    description: "宣纸米白与松烟浓墨勾勒太极剑仙，剑穗一点朱砂红点睛，刚柔并济留白清雅。",
  },
  "starlight-conductor": {
    style: "银河铁道",
    description: "深邃星穹靛蓝与香槟金星轨，银河铁道列车长提灯领航你的每一次灵感跃迁。",
  },
  "midnight-roaster": {
    style: "深夜咖啡屋",
    description: "深烘浓缩棕与暖黄爱迪生吊灯光束，手冲咖啡师与奶牛猫陪你度过深夜专注时光。",
  },
  "tabby-desk": {
    style: "治愈萌宠",
    description: "午后百叶窗斜阳暖白与龟背竹抹茶绿，软萌大橘猫趴在客制化键盘旁陪你写代码。",
  },
  "capy-onsen": {
    style: "佛系汤屋",
    description: "桧木汤屋原木色调与青绿温泉雾气，头顶金柚的佛系水豚陪你稳住心态零焦虑。",
  },
  "dunhuang-melody": {
    style: "敦煌岩彩",
    description: "莫高窟泥金、石绿与朱砂三色岩彩交辉，飞天仙子怀抱琵琶携飘带翩然而至。",
  },
  "jiangnan-rain": {
    style: "青瓷烟雨",
    description: "宋瓷天青与江南斜雨细丝，执油纸伞的汉服少女携双燕与微粉梅韵入画。",
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

export function defaultPreviewPalette(skin: Skin) {
  const palette = isDarkSkin(skin) ? skin.dark : undefined;
  return {
    colors: palette?.colors ?? skin.colors,
    preview: { ...skin.preview, ...palette?.preview },
  };
}

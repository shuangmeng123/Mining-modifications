onEvent('block.modification', event => {
	function blockModify(blockList, destroySpeed) {
		for (let b of blockList) {
			let id = 'minecraft:' + b;
			event.modify(id, block => {
				block.destroySpeed = destroySpeed;
			});
		}
	}
	//颜色
	let color = ['white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'pink', 'gray', 'light_gray', 'cyan', 'purple', 'blue', 'brown', 'green', 'red', 'black'];
	//材质大类	
	//木头材质
	let wooden = ['oak', 'spruce', 'birch', 'jungle', 'acacia', 'dark_oak', 'mangrove']
	//菌丝木材质
	let hyphae = ['crimson', 'warped']
	//岩石变种
	let stone_0 = ['granite', 'diorite', 'andesite']
	//砂岩
	let sandstone = ['sandstone', 'red_sandstone']
	//海晶石
	let prismarine = ['dark_prismarine', 'prismarine_bricks', 'prismarine']
	//菌岩
	let mylium = hyphae.map(a => a + '_mylium');
	//其他石类
	let stone = ['tuff', 'dripstone_block', 'calcite']
	//矿石种类
	let ore = ['coal', 'iron', 'lapis', 'copper', 'glod', 'redstone', 'lit_redstone', 'diamond', 'emerald']
	//地狱矿石
	let ore_nether = ['quartz', 'glod'].map(a => 'nether_' + a)
	//其他矿石
	let ore_other = ['ancient_debris']
	//矿块
	let block = ['amethyst'].concat(ore).map(a => a + '_block');
	//粗矿块
	let block_raw = ['iron', 'copper', 'glod'].map(a => 'raw_' + a + 'block')
	//功能性方块
	let table = ['crafting_table', 'bookshelf', 'beehive', 'fletching_table', 'lectern', 'barrel', 'cartography_table', 'chest', 'jukebox', 'note_block', 'smithing_table', 'loom']//木制方块
	let furnace = ['furnace', 'blast_furnace', 'smoker', 'grindstone']//炉子，砂轮
	let anwil = ['anvil', 'shipped_anvil', 'damaged_anvil']//铁砧
	//木 破坏调整
	let all_wood = wooden.concat(hyphae);
	//原木
	let wooden_log = wooden.map(a => a + '_log');
	//菌丝原木
	let hyphae_0 = hyphae.map(a => a + '_hyphae');
	//去皮
	let stripped = wooden_log.concat(hyphae_0).map(a => 'stripped_' + a);
	//木板
	let wooden_pkanks = all_wood.map(a => a + '_planks');
	//台阶，楼梯, 栅栏,告示牌,门，活版门,压力板
	let wooden_slab = all_wood.map(a => a + '_slab');
	let wooden_stairs = all_wood.map(a => a + '_stairs');
	let wooden_fence = all_wood.map(a => a + '_fence')
	let wodden_sign = all_wood.map(a => a + '_sign')
	let wooden_gate = wooden_fence.map(a => a + '_gate')
	let wooden_door = all_wood.map(a => a + '_door')
	let wooden_plate = all_wood.map(a => a + 'pressure')
	let wooden_trapdoor = all_wood.map(a => a + '_trapdoor')
	//木制总类
	let wooden_total = wooden_log.concat(hyphae_0).concat(stripped).concat(wooden_pkanks).concat(wooden_slab).concat(wooden_stairs).concat(wooden_trapdoor).concat(wodden_sign).concat(wooden_fence).concat(wooden_gate).concat(wooden_door).concat(wooden_plate);
	blockModify(wooden_total, 15)
	//木制功能性方块
	blockModify(table, 15)
	//矿物 破坏调整
	let other_ore = ore.map(a => a + '_ore')
	let other_deepslate_ore = ore.map(a => 'deepslate' + a + 'ore')
	let amethyst = ['budding_amethyst', 'amethyst_block', 'amethyst_cluster']
	let amethyst_bud = ['small', 'medium', 'large'].map(a => a + 'amethyst_bud')
	let all_ore = other_ore.concat(other_deepslate_ore).concat(amethyst).concat(amethyst_bud)
	blockModify(all_ore, 20)//此数值为更改主世界原矿的破坏速度
	//矿块类调整
	let block_all = block.concat(block_raw)
	blockModify(block_all, 20)//此数值为更改矿块的破坏速度
	let block_a = ore_other.map(a => a + '_block')
	blockModify(block_a)//此数值是更改下界合金块的破坏速度
	blockModify(anwil,20)//此数值是修改金属制的功能性方块
	//特殊
	let plate_weighted = ('light', 'heavy').map(a => a + '_weighted_pressure_plate')
	let plate_stone = ('stone').map(a => a + '_pressure_plate')
	let plate = plate_stone.concat(plate_weighted)
	blockModify(plate, 10)
	let iron = ('trapdoor', 'bars', 'door').map(a => 'iorn_' + a)
	blockModify(iron, 20)
	//铜
	let state = ['exposed', 'weathered', 'oxidized']
	let copper = state.map(a => a + '_copper')
	let cut_copper = state.map(a => a + '_cut_copper')
	let waxed_copper_0 = copper.map(a => 'waxed' + a)
	let waxed_copper_1 = cut_copper.map(a => 'waxed' + a)
	let other_copper = ['cut_copper', 'waxed_cut_copper']
	let copper_stairs = other_copper.concat(cut_copper).concat(waxed_copper_1)
	let copper_1 = ['copper_block', 'waxed_copper_block']
	let copper_all = copper.concat(cut_copper).concat(waxed_copper_0).concat(waxed_copper_1).concat(other_copper).concat(copper_1).concat(copper_stairs)
	blockModify(copper_all, 20)//此数值为更改铜块以及其衍生物的破坏速度 
	//地狱矿石
	let nether = ore_nether
	blockModify(nether, 19)//此数值为更改下界原矿的破坏速度
	blockModify(ore_other, 21)//此数值是更改远古残骸的破坏速度
	//石英
	let quartz_0 = ['block', 'pillar', 'bricks'].map(a => 'quartz' + a)
	let quartz_1 = ['chiseled_quartz_block', 'smooth_quartz']
	let quartz = quartz_0.concat(quartz_1)
	blockModify(quartz, 19)//此数值是更改石英块以及其衍生物的破坏速度
	//其他石类
	blockModify(stone, 20)
	//石质功能性方块
	blockModify(furnace, 20)
	//石头及其变种，楼梯，墙，台阶
	let stone_1 = ['stone', 'smooth_stone'];
	let stone_2 = stone.map(a => 'polished_' + a);
	let cut_sandstone = sandstone.map(a => 'cut_' + a);
	let smooth_sandstone = sandstone.map(a => 'smooth_' + a);
	let chiseled_sandstone = sandstone.map(a => 'chiseled_' + a);
	let all_stone = stone.concat(stone).concat(stone_2).concat(stone_0).concat(stone_1).concat(cut_sandstone).concat(smooth_sandstone).concat(chiseled_sandstone);
	let stone_slab = all_stone.map(a => a + '_slab');
	let stone_stairs = all_stone.map(a => a + '_stairs');
	let stone_wall = all_stone.map(a => a + '_wall');
	let stone_all = all_stone.concat(stone_slab).concat(stone_stairs).concat(stone_wall).concat(prismarine);
	blockModify(stone_all, 20)
	//色彩类方块
	let wool = color.map(a => a + '_wool')
	let carpet = color.map(a => a + '_carpet')
	let wool_carpet = wool.concat(carpet)
	blockModify(wool_carpet, 15)
	let bed = color.map(a => a + '_bed')
	blockModify(bed, 20)
	//混凝土以及粉末
	let concrete = color.map(a = a + "_concrete")
	let powder = concrete.map(a = a + '_powder')
	let concrete_powder = concrete.concat(powder)
	blockModify(concrete_powder, 19)
	//陶瓦与带釉陶瓦
	let terraccotta = color.map(a => a + '_terracotta')
	let terraccotta_glazed = color.map(a => a + '_glazed_terracotta')
	let terraccotta_all = ['terraccotta'].concat(terraccotta).concat(terraccotta_glazed)
	blockModify(terraccotta_all, 20)
	//玻璃
	let stained_glass = color.map(a => a + '_stained_glass')
	let stained_glass_pane = stained_glass.map(a => a + '_pane')
	let glass = ['glass_pane', 'glass']
	let all_glass = stained_glass.concat(stained_glass_pane).concat(glass)
	blockModify(all_glass, 15)
	//旗帜
	let bannder = color.map(a => a + 'bannder')
	let all_bander=['bander'].concat(bannder)
	blockModify(all_bander,13)
});
var V1_7_10 = {
	blockOptionHardness: "setHardness",
	blockOptionResistance: "setResistance",
	blockOptionQuantityDropped: "quantityDropped(Random r)",
	blockOptionLightOpacity: "getLightOpacity",
	blockOptionLightValue: "getLightValue",
	blockOptionRightClick: "onBlockActivated(World world, int x, int y, int z, EntityPlayer player, int side, float hx, float hy, float hz)",
	blockOptionLeftClick: "onBlockClicked(World world, int x, int y, int z, EntityPlayer player)",
	blockOptionPlacedPlayer: "onBlockPlacedBy(World world, int x, int y, int z, EntityLivingBase player, ItemStack itemstack)",
	blockOptionDestroyPlayer: "onBlockHarvested(World world, int x, int y, int z, int meta, EntityPlayer player)",
	blockOptionDestroyExplosion: "onBlockDestroyedByExplosion(World world, int x, int y, int z, Explosion explosion)",
	blockOptionEntityCollide: "onEntityCollidedWithBlock(World world, int x, int y, int z, Entity genericEntity)",
	blockOptionBoundingBox: "getCollisionBoundingBoxFromPool(World p_getCollisionBoundingBoxFromPool_1_, int p_getCollisionBoundingBoxFromPool_2_, int p_getCollisionBoundingBoxFromPool_3_, int p_getCollisionBoundingBoxFromPool_4_)",
	blockOptionRenderAsNormal: "renderAsNormalBlock",
	blockOptionOpaque: "isOpaqueCube",
	blockOptionXP: "getExpDrop",
	worldSetTime: "setWorldTime",
	worldNewExplosion: "newExplosion",
	playerPlaySound: "playSoundAtEntity",
	itemOptionLore: "addInformation(ItemStack itemstack, EntityPlayer p_77624_2_, List lores, boolean p_77624_4_)",
	itemOptionDoesntLeave: "doesContainerItemLeaveCraftingGrid(ItemStack p_77630_1_)",
	nbtHasKey: "hasKey",
	nbtSetDouble: "setDouble",
	nbtSetString: "setString",
	nbtGetDouble: "getDouble",
	nbtGetString: "getString",
	itemstackGetTag: "getTagCompound",
	itemstackSetTag: "setTagCompound",
	itemstackHasTag: "hasTagCompound",
	playerPosX: "posX",
	playerPosY: "posY",
	playerPosZ: "posZ",
	entityPosX: "posX",
	entityPosY: "posY",
	entityPosZ: "posZ",
	playerAddItem: "addItemStackToInventory",
	worldAddWeatherEffects: "addWeatherEffect",
	chatComponentText: "ChatComponentText",
	playerAddChatMessage: "addChatMessage",
	worldSetBlock: "setBlock",
	worldSetBlockMeta: "setBlock",
	worldBreakBlock: "func_147480_a",
	playerVelocity: "setVelocity",
	entityVelocity: "setVelocity",
	playerTeleport: "setPositionAndUpdate",
	entityTeleport: "setPositionAndUpdate",
	worldSpawnEntity: "spawnEntityInWorld",
	entityRenderNametag: "setAlwaysRenderNameTag",
	entitySetNametag: "setCustomNameTag",
	entitySetHealth: "setHealth",
	playerSetHealth: "setHealth",
	entityLivingSound: "getLivingSound",
	entityDeathSound: "getDeathSound",
	entityHurtSound: "getHurtSound",
	entitySplashSound: "getSplashSound",
	entitySwimSound: "getSwimSound",
	spawnParticle: "spawnParticle",
	eventSetCanceled: "setCanceled",
	eventIsCancleable: "isCancelable",
	eventItemPickup: "ItemPickupEvent",
	eventItemCraft: "ItemCraftedEvent",
	eventItemSmelt: "ItemSmeltedEvent",
	eventPlayerJoin: "PlayerLoggedInEvent",
	eventPlayerLogOut: "PlayerLoggedOutEvent",
	eventPlayerRespawn: "PlayerRespawnEvent",
	eventPlayerArrowShoot: "ArrowNockEvent",
	eventPlayerAttackEntity: "AttackEntityEvent",
	eventPlayerBonemeal: "BonemealEvent",
	eventPlayerFillBucket: "FillBucketEvent",
	eventPlayerDestroyItem: "PlayerDestroyItemEvent", 
	eventPlyerOpenContainer: "PlayerOpenContainerEvent",
	eventPlayerPickupXP: "PlayerPickupXpEvent",
	eventPlayerSleepInBed: "PlayerSleepInBedEvent",
	eventPlayerUseHoe: "UseHoeEvent",
	eventSaplingGrow: "SaplingGrowTreeEvent",
	eventNoteBlockPlay: "NoteBlockEvent.Play",
	eventNoteBlockChange: "NoteBlockEvent.Change",
	recipeCraftShaped: "GameRegistry.addRecipe",
	recipeCraftShapeless: "GameRegistry.addShapelessRecipe",
	recipeSmelting: "GameRegistry.addSmelting",
	setFireEntity: "setFire"
}
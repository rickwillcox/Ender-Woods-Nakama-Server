function InitModule(ctx : nkruntime.Context, logger: nkruntime.Logger, nk: nkruntime.Nakama, initializer: nkruntime.Initializer) {
    logger.info("JS module loaded");
    // Database related RPCs
    initializer.registerRpc("healthcheck", rpcHealthCheck);
    initializer.registerRpc("get_items", getItems);
    initializer.registerRpc("get_recipes", getRecipes);
    initializer.registerRpc("get_modifiers", getModifiers);

    // Player inventory
    initializer.registerRpc("get_inventory", getInventory);
    initializer.registerRpc("set_inventory", setInventory);

    // Quests
    initializer.registerRpc("get_quests", getQuests);
    initializer.registerRpc("get_user_quest_states", getUserQuestStates);
    initializer.registerRpc("set_user_quest_states", setUserQuestStates);

    // Check auth
    initializer.registerRpc("check_auth", checkAuth);

    // initialize user metadata
    initializer.registerAfterAuthenticateCustom(afterAuthenticateCustom);
    initializer.registerAfterAuthenticateEmail(afterAuthenticateEmail);

    // Get a users gamedata
    initializer.registerRpc("get_gamedata", getGameData);
    // Set a users gamedata
    initializer.registerRpc("update_gamedata", updateGameData);
}

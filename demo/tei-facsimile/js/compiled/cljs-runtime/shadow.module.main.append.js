
shadow.cljs.devtools.client.env.module_loaded('main');

try { user.start_dev(); } catch (e) { console.error("An error occurred when calling (user/start-dev)"); throw(e); }
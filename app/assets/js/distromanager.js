const { DistributionAPI } = require('helios-core/common');

const ConfigManager = require('./configmanager');

exports.REMOTE_DISTRO_URL =
    'http://gotiger.ipdisk.co.kr:9999/launcher/distribution/distribution-taecho-village.json';

const api = new DistributionAPI(
    ConfigManager.getLauncherDirectory(),
    null, // Injected forcefully by the preloader.
    null, // Injected forcefully by the preloader.
    exports.REMOTE_DISTRO_URL,
    false
);

exports.DistroAPI = api;

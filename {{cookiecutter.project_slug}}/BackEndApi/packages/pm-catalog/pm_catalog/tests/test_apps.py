from pm_catalog.apps import PMCatalogConfig


def test_app_config_name():
    assert PMCatalogConfig.name == "pm_catalog"

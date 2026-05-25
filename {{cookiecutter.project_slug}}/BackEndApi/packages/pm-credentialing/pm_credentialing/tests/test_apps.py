from pm_credentialing.apps import PMCredentialingConfig


def test_app_config_name():
    assert PMCredentialingConfig.name == "pm_credentialing"

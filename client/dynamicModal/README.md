Include template {{> dynamicModal name="default" class="fade"}}

To open modal just call UniUtils.openModal(template, data, modalName, options), where:
 * template - template with content of your modal
 * data - the context for your template.
 * modalName - optional default is "default"
 * options - additional stuff, such as dialogClass, where we can pass size of modal (modal-lg, modal-sm)

To close modal just call UniUtils.closeModal(modalName), where modalName is optional default is "default"

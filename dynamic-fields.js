function  wbk_on_form_rendered( service ){   
   jQuery('#wbk-book-quantity').change( function(){         	 
      jQuery('#wbk_dynamic_fields').html('');
     	for( var i = 2; i <= parseInt( jQuery(this).val() ); i++ ){
            var template = '<label class="wbk-input-label" for="wbk-secondary-name_' + i + '">Name</label><span class="wpcf7-form-control-wrap wbk-secondary-name_' + i + '"><input type="text" name="wbk-secondary-name_' + i + '" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required wbk-text" id="wbk-secondary-name_' + i + '" aria-required="true" aria-invalid="false"></span><label class="wbk-input-label" for="wbk-secondary-email_' + i + '">Email</label><span class="wpcf7-form-control-wrap wbk-secondary-email_' + i + '"><input type="text" name="wbk-secondary-email_' + i + '" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required wbk-text" id="wbk-secondary-email_' + i + '" aria-required="true" aria-invalid="false"></span><label class="wbk-input-label" for="wbk-secondary-phone_' + i + '">Phone</label><span class="wpcf7-form-control-wrap wbk-secondary-phone_' + i + '"><input type="text" name="wbk-secondary-phone_' + i + '" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required wbk-text" id="wbk-secondary-phone_' + i + '" aria-required="true" aria-invalid="false"></span>';           
            jQuery('#wbk_dynamic_fields').append( template );
        }		     
   }); 
}

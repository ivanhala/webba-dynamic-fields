function  wbk_on_form_rendered( service ){   
   jQuery('#wbk-book-quantity').change( function(){    
     	var i = 2;
      jQuery('#wbk_dynamic_fields').html('');
     	for( i = 2; i <= parseInt( jQuery(this).val() ); i++ ){
            var template = '<label class="wbk-input-label" for="name_' + i + '">Nom ' + i + '</label><span class="wpcf7-form-control-wrap name_' + i + '"><input type="text"  id="name_' + i + '"   name="name_' + i + '" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required wbk-text" aria-required="true" aria-invalid="false"></span><label class="wbk-input-label" for="prenom_' + i + '">Prénom ' + i + '</label><span class="wpcf7-form-control-wrap prenom_' + i + '"><input type="text" id="prenom_' + i + '" name="prenom_' + i + '" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required wbk-text" aria-required="true" aria-invalid="false"></span><label class="wbk-input-label" for="member_' + i + '">Membre ' + i + '</label><span class="wpcf7-form-control-wrap member_' + i + '"><select name="member_' + i + '" class="wpcf7-form-control wpcf7-select wbk-select" id="member_' + i + '" aria-invalid="false"><option value="oui">oui</option><option value="non">non</option></select></span>';           
            jQuery('#wbk_dynamic_fields').append( template );
        }		     
  }); 
}

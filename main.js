
$(document).ready(function(){
	var list=$('#taskList');
		
	
	$('#addItem').on('click',function(){
		var nameText,
			descriptionText,
			nameTextModification,
			descriptionTextModification;
	
		var  task,
			 taskDiv1,taskDiv2,
			 taskName,
			 description_btn,
			 complete_btn,
			 delete_btn,
			 modify_btn,
			 confirmModification_btn;
	
		nameText=$('#name').val();
		$('#name').val(null);
		descriptionText=$('#description').val();
		$('#description').val(null);

		if(nameText.length==0 ||descriptionText.length==0){
			alert('Complete data')
		}else{

			task=$('<div></div>').attr('class','newTask');
			list.append(task);
	
	 		taskDiv1=$('<div></div>').attr('class','taskDiv1');
			task.append(taskDiv1);
				taskName=$('<p></p>').attr('class','taskp').text(nameText);
					taskDiv1.append(taskName);
					description_btn=$('<input type="submit" value="description">').attr('class','btnDescription');
					taskDiv1.append(description_btn);
				// taskDescription=$('<div></div>').attr('class','textDescription').text(descriptionText);
				// taskDiv1.append(taskDescription);
				// taskDescription.hide();
				

			taskDiv2=$('<div></div>').attr('class','taskDiv2');
			task.append(taskDiv2);
				complete_btn=$('<input type="submit" value="Complete" >').attr('class','button_complete');
					taskDiv2.append(complete_btn);
				delete_btn=$('<input type="submit" value="Delete">').attr('class','button_delete');
					taskDiv2.append(delete_btn);
				modify_btn=$('<input type="submit" value="Modify">').attr('class','button_modify');
					taskDiv2.append(modify_btn);
				confirmModification_btn=$('<input type="submit" class="complete_btn" value="Confirm" >').attr('class','button_complete');
					taskDiv2.append(confirmModification_btn);
				confirmModification_btn.hide();
		
	

		//--completed button
		$(complete_btn).on('click',function(){
			taskDiv1.children().hide();
			taskName.remove();
			complete_btn.remove();
			modify_btn.remove();
			nameText='¡COMPLETED!';
			taskName=$('<p></p>').attr('class','taskp').text(nameText);
			task.prepend(taskName);
			task.toggleClass('completeBox');

			$(delete_btn).on('click',function(){
				task.remove();
			});
		})

		//deleted button
		$(delete_btn).on('click',function(){
			complete_btn.remove();
			modify_btn.remove();
			task.toggleClass('deleteBox');
				$(delete_btn).on('click',function(){
					task.remove();
				});
		});

		//modify button
		$(modify_btn).on('click',function(){
			
			taskName.hide();
			description_btn.hide();
			taskDiv2.children().hide();
			nameTextModification=$('<input type="text" id="textModify" placeholder="Name..." >').attr('class','modificatedText');
			taskDiv1.prepend(nameTextModification);
			descriptionTextModification=$('<textarea  id="textDescriptionModify" placeholder="Description..."></textarea>').attr('class','modificatedTextDescription');
			taskDiv1.append(descriptionTextModification);
			confirmModification_btn.show();	
		});

			$(confirmModification_btn).on('click',function(){
				;

				nameText=$('#textModify').val();
				descriptionText=$('#textDescriptionModify').val();
				if(nameText.length==0 ||descriptionText.length==0){
				alert('Complete data')
				} else{
				nameTextModification.remove();
				descriptionTextModification.remove();
				taskName.show().text(nameText);
				description_btn.show();
				confirmModification_btn.hide();
				complete_btn.show();
				delete_btn.show();
				modify_btn.show();
				taskDescription.text(textDescription);
				
			}});//confirmModification end
		// });//modify end

		$(description_btn).on('click',function(){
			
			description_btn.hide();

			var exit_btn=$('<input type="submit" value="exit">').attr('class','btnExitDescription');
				taskDiv1.append(exit_btn);
			var taskDescription=$('<div></div>').attr('class','textDescription').text(descriptionText);
				taskDiv1.append(taskDescription);
			modify_btn.hide();

		
			$(exit_btn).on('click', function(){
				taskDescription.hide();
				exit_btn.hide();
				description_btn.show();
				modify_btn.show();
			});//exit end

		});//description end
}//end else
	});// additem end


	
	


	//clear button
	$('#clear').on('click',function(){
	list.children().remove();
	});


});





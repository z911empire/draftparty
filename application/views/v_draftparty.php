<div class="container-fluid">
	<div class="row-fluid">
		<div class="span10 offset1">
			<div id="setup" class="row-fluid">
				<form class="span12">
					
					<legend>Teams</legend>

                    <div class="input-prepend"><span class="add-on">1</span><input class="draftteam" id="prependedInput" type="text" placeholder="First Pick"></div>
                    <div class="input-prepend"><span class="add-on">2</span><input class="draftteam" id="prependedInput" type="text" placeholder="Second Pick"></div>
                    <div class="input-prepend"><span class="add-on">3</span><input class="draftteam" id="prependedInput" type="text" placeholder="Third Pick"></div>
                    <div class="input-prepend"><span class="add-on">4</span><input class="draftteam" id="prependedInput" type="text" placeholder="Fourth Pick"></div>
                    <!--<div class="input-prepend"><span class="add-on">5</span><input class="draftteam" id="prependedInput" type="text" placeholder="Fifth Pick"></div>
                    <div class="input-prepend"><span class="add-on">6</span><input class="draftteam" id="prependedInput" type="text" placeholder="Sixth Pick"></div>
                    <div class="input-prepend"><span class="add-on">7</span><input class="draftteam" id="prependedInput" type="text" placeholder="Seventh Pick"></div>
                    <div class="input-prepend"><span class="add-on">8</span><input class="draftteam" id="prependedInput" type="text" placeholder="Eighth Pick"></div>
                    <div class="input-prepend"><span class="add-on">9</span><input class="draftteam" id="prependedInput" type="text" placeholder="Second-to-Last Pick"></div>
                    <div class="input-prepend"><span class="add-on">10</span><input class="draftteam" id="prependedInput" type="text" placeholder="Last Pick"></div>-->                    
					<br/>
					<legend>Draft Clock</legend>
					<label>Specify Time Per Pick:</label>
					<input name="drafttimersetup" type="text" placeholder="Time per pick in seconds...">
					
					<div class="form-actions">
						<button type="button" name="launchdraft" class="span5 offset1 btn btn-success btn-large">Launch Draft</button><button type="button" name="resetform" class="span5 btn btn-large">Reset Controls</button>
					</div>
				</form>
			</div>
            <div id="draft" class="row-fluid">
            	<div class="span6">
                	<h1>Draft Clock:</h1><hr/>
                    <div class="well jumbotron">----</div>
                    <hr/>
                    <div class="pull-right"><button name="timerstopstart" class="btn btn-large  btn-success" type="button">Start</button>
                        <button name="timerreset" class="btn btn-large btn-info" type="button">Reset</button>
                    </div>
                </div>
                <div class="span6" class="row-fluid">
               		<h1>Draft Order:</h1> <hr/>
                	<div class="span12 row-fluid">
                        <div class="span4" id="snakeinfo">
                            <h4 class="muted">ON CLOCK</h4>
                            <h4 class="muted">ON DECK</h4>
                            <h4 class="muted">DBL DECK</h4>                        
                        </div>
                        <div class="span8" id="thesnake"></div>
                    </div>

					<div class="span12 row-fluid">
                        <hr/>
                        <div class="pull-right">
                            <button name="snakebwd" class="btn btn-large btn-info" type="button">Previous Pick</button>
                            <button name="snakefwd" class="btn btn-large btn-info" type="button">Next Pick</button>
                        </div>
                    </div>
                </div>            
            </div>
		</div>
	</div>
</div>
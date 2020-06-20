namespace $.$$ {

	export class $hyoo_js_sandbox extends $.$hyoo_js_sandbox {

		script( next? : string ) {
			return this.$.$mol_state_arg.value( 'script' , next ) || ''
		}

		@ $mol_mem
		script_to_execute( next = '' ) {
			this.script()
			return next
		}

		@ $mol_mem
		func() {
			return this.Sandbox().eval( this.script_to_execute() )
		}

		@ $mol_mem
		result( next? : string ) {

			$mol_dom_context.document.cookie = 'password=P@zzW0rd'
			
			const func = this.func()
			return func() ?? null
		}

		run() {
			this.script_to_execute( this.script() )
		}

		snippets() {
			return this.snippet_codes().map( ( code , index )=> this.Snippet( index ) )
		}

		snippet_code( index : number ) {
			return this.snippet_codes()[ index ]
		}

	}

	export class $hyoo_js_sandbox_snippet extends $.$hyoo_js_sandbox_snippet {

		text() {
			return '```\n' + this.code() + '\n```'
		}

	}

}
